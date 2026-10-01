// Utilities for managing user uploaded images in local storage and backend disk

export type ImageSlot = 'hero' | 'logo' | 'certificate';

const DEFAULT_IMAGES: Record<ImageSlot, string> = {
  hero: '/images/hero-gps-monitor.png',
  logo: '/images/logo-descomplicando-gps.png',
  certificate: '/images/inprotec-certificado-tablet.png',
};

const FILE_NAMES: Record<ImageSlot, string> = {
  hero: 'hero-gps-monitor.png',
  logo: 'logo-descomplicando-gps.png',
  certificate: 'inprotec-certificado-tablet.png',
};

export function getCustomImage(slot: ImageSlot): string {
  try {
    const saved = localStorage.getItem(`custom_img_${slot}`);
    if (saved && saved.startsWith('data:image')) {
      return saved;
    }
  } catch (e) {
    // Ignore storage errors
  }
  return DEFAULT_IMAGES[slot];
}

export async function saveCustomImage(slot: ImageSlot, file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const base64 = reader.result as string;
      try {
        localStorage.setItem(`custom_img_${slot}`, base64);
      } catch (e) {
        console.warn('LocalStorage limit reached for image', e);
      }

      // Send to server to write to disk
      try {
        await fetch('/api/upload-image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fileName: FILE_NAMES[slot],
            dataBase64: base64,
          }),
        });
      } catch (e) {
        console.warn('Backend write skipped/offline', e);
      }

      window.dispatchEvent(new CustomEvent('applet-images-updated', { detail: { slot, url: base64 } }));
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
