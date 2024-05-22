export const normalizeTitle = (title : string) => {
    // Decode and normalize the title
    return title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, ' ').trim();
}


