// app/components/ServiceCard.tsx
const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="font-bold text-lg">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
