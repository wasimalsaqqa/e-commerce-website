function DetailsBtn({ onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="w-full py-2 font-lato text-[#8E1616] border border-[#8E1616] rounded-lg hover:text-red-700 hover:border-red-600 cursor-pointer"
      >
        View Details
      </button>
    </div>
  );
}

export default DetailsBtn;
