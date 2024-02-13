export const getPageInfo = (page: number) => {
    const limit = page === 1 ? 11 : 12
    // 11 12 12 12

    // page = 3
    const offset = page === 1
        ? 0
        : (page - 2) * 12 + 11
    // 0 11 23 35 47 59 

    return {
        limit: limit,
        offset: offset
    }
} 