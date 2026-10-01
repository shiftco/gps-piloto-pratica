import React, { useState, useEffect, useRef } from 'react';
import { ImageSlot, getCustomImage, saveCustomImage } from '../utils/imageStore';
import { Camera, Check, UploadCloud } from 'lucide-react';

interface ImageDropSlotProps {
  slot: ImageSlot;
  alt: string;
  defaultSrc?: string;
  aspectClass?: string;
  className?: string;
  bgClass?: string;
  buttonLabel?: string;
  children?: React.ReactNode;
}

export const ImageDropSlot: React.FC<ImageDropSlotProps> = ({
  slot,
  alt,
  defaultSrc,
  aspectClass = "aspect-[16/9]",
  className = "",
  bgClass = "bg-transparent",
  buttonLabel = "Trocar Imagem",
  children
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(() => getCustomImage(slot));
  const [isDragging, setIsDragging] = useState(false);
  const [justSaved, setJustSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Somente exibe os botões de troca se a URL contiver '?edit=1' (modo administrativo)
  const isEditMode = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('edit') === '1';

  useEffect(() => {
    const handleUpdate = (e: any) => {
      if (e.detail?.slot === slot && e.detail?.url) {
        setCurrentSrc(e.detail.url);
      }
    };
    window.addEventListener('applet-images-updated', handleUpdate);
    return () => window.removeEventListener('applet-images-updated', handleUpdate);
  }, [slot]);

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) return;
    try {
      const savedUrl = await saveCustomImage(slot, file);
      setCurrentSrc(savedUrl);
      setJustSaved(true);
      setTimeout(() => setJustSaved(false), 3000);
    } catch (e) {
      console.error('Failed to save image', e);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (!items) return;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const file = items[i].getAsFile();
        if (file) {
          handleFile(file);
          break;
        }
      }
    }
  };

  return (
    <div
      onDragOver={isEditMode ? (e) => { e.preventDefault(); setIsDragging(true); } : undefined}
      onDragLeave={isEditMode ? () => setIsDragging(false) : undefined}
      onDrop={isEditMode ? handleDrop : undefined}
      onPaste={isEditMode ? handlePaste : undefined}
      tabIndex={isEditMode ? 0 : undefined}
      className={`relative group ${className} ${isEditMode && isDragging ? 'ring-4 ring-emerald-500 scale-[1.01]' : ''} transition-all duration-200 outline-none`}
    >
      <input
        type="file"
        ref={fileInputRef}
        accept="image/png,image/jpeg,image/webp,image/svg+xml"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
          }
        }}
        className="hidden"
      />

      {/* Render custom uploaded image or children/default */}
      {currentSrc && currentSrc.startsWith('data:image') ? (
        <div className={`w-full ${aspectClass} overflow-hidden flex items-center justify-center ${bgClass}`}>
          <img
            src={currentSrc}
            alt={alt}
            className="w-full h-full object-contain"
          />
        </div>
      ) : children ? (
        children
      ) : (
        <div className={`w-full ${aspectClass} overflow-hidden flex items-center justify-center ${bgClass}`}>
          <img
            src={defaultSrc || currentSrc}
            alt={alt}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      {/* Botão de upload/troca somente exibido se estiver em modo ?edit=1 */}
      {isEditMode && (
        <div className="absolute top-3 right-3 z-30 opacity-90 group-hover:opacity-100 transition-opacity">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title="Clique para selecionar o arquivo da imagem do seu computador"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-black/85 hover:bg-emerald-600 text-white rounded-lg border border-emerald-500/50 shadow-lg text-xs font-semibold backdrop-blur-md cursor-pointer transition-all hover:scale-105"
          >
            {justSaved ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-300" />
                <span className="text-emerald-300">Imagem Atualizada!</span>
              </>
            ) : (
              <>
                <Camera className="w-3.5 h-3.5 text-emerald-400" />
                <span>{buttonLabel}</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Drag overlay hint */}
      {isEditMode && isDragging && (
        <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-xs flex flex-col items-center justify-center text-white z-40 rounded-xl border-2 border-dashed border-emerald-400">
          <UploadCloud className="w-10 h-10 text-emerald-400 animate-bounce mb-2" />
          <p className="font-bold text-sm">Solte a imagem aqui para atualizar!</p>
        </div>
      )}
    </div>
  );
};
