export function createWhatsAppUrl(phone, message = '') {
  const cleanPhone = phone.replace(/\D/g, '')
  const text = message ? `?text=${encodeURIComponent(message)}` : ''

  return `https://wa.me/${cleanPhone}${text}`
}

export function createMapsUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address,
  )}`
}
