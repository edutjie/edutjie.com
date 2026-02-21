// Splits an array into evenly-sized chunks. Used by the Swiper carousels.
export const createChunks = <T>(items: T[], size: number): T[][] => {
    const chunks: T[][] = []
    for (let i = 0; i < items.length; i += size) {
        chunks.push(items.slice(i, i + size))
    }
    return chunks
}
