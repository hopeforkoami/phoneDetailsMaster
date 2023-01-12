const baseURL = 'https://phone-specs-api.azharimm.dev/';
const api = {
  getBrands: async () => {
    const response = await fetch(`${baseURL}brands/`);
    const data = await response.json();

    const brands = Object.entries(data.data).map(([key, brand]) => {
      if (key >= 0) {
        return {
          id: brand.brand_id,
          name: brand.brand_name,
          nbrePhone: brand.device_count,
          brandQuery: brand.brand_slug,
        };
      }

      return {
        id: brand.brand_id,
        name: brand.brand_name,
        nbrePhone: brand.device_count,
        brandQuery: brand.brand_slug,
      };
    });
    return brands;
  },
  getBrandPhones: async (brandId) => {
    const response = await fetch(`${baseURL}brands/${brandId}`);
    const rep = await response.json();
    const phones = Object.entries(rep.data.phones).map(([key, phone]) => {
      if (key !== undefined) {
        return ({
          name: phone.phone_name,
          image: phone.image,
          brandQuery: phone.slug,
        });
      }
      return ({
        name: phone.phone_name,
        image: phone.image,
        brandQuery: phone.slug,
      });
    });
    console.log(phones);
    return phones;
  },
  getPhoneDetails: async (slug) => {
    const response = await fetch(baseURL + slug);
    const data = await response.json();
    return data;
  },
};

export default api;
