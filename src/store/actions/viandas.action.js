export const SELECT_VIANDA = 'SELECT_VIANDA';
export const FILTER_VIANDAS = 'FILTER_VIANDAS'

export const selectBread = (breadId) => ({
    type: SELECT_VIANDA,
    breadId,
})

export const filterViandas = (categoryId) => ({
    type: FILTER_VIANDAS,
    categoryId,
})