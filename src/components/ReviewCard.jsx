import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={imgURL} alt="customer" className="rounded-full object-cover size-[120px]" />
      <p className="mt-6 text-center info-text max-w-sm">{feedback}</p>
      <div className="flex items-center justify-center mt-3 gap-2.5">
        <img src={star} alt="star" className="size-6 m-0 object-contain" />
        <span className="text-xl font-montserrat text-slate-gray">({rating})</span>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
