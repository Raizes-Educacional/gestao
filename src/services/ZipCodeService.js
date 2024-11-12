export const ZipCodeService = {
  getAddress: async (zipCode) => {
    const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
    const data = await response.json()
    return data
  },
}
