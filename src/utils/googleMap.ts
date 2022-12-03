export const googleMap = () => {
  const mapURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=geometry,places&language=en&region=NO&v=quarterly`;
  const scripts = document.getElementsByTagName("script");
  console.log('key', process.env.REACT_APP_GOOGLE_MAPS_API_KEY); //! Console log!
  

  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].src.indexOf(mapURL) === 0) {
      return scripts[i];
    }
  }

  const googleMapScript = document.createElement('script');
  googleMapScript.src = mapURL;
  googleMapScript.async = true;
  googleMapScript.defer = true;
  window.document.body.appendChild(googleMapScript);

  return googleMapScript;
};
