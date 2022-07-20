export const TTQ_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID

// https://ads.tiktok.com/marketing_api/docs?rid=5ipocbxyw8v&id=1701890973258754
export const event = (name, parameters = {}) => {
  window.ttq.track(name, parameters)
}