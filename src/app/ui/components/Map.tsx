export default function Map() {
  const direction = "Gral+Enrique+Martínez+1311"
  const center = "-34.87330627441406,-56.19091033935547"
  return (
    <iframe
      title="google-maps"
      className="left-0 top-0 h-full w-full"
      style={{ border: 0 }}
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${direction}&center=${center}`}
      allowFullScreen
    />
  );
}
