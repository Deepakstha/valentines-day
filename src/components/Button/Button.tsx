const Button = ({ props }: { props: string }) => {
  return (
    <button className="border rounded-full bg-red-500  px-20 py-3 max-md:py-2 max-md:px-10">
      {props}
    </button>
  );
};
export default Button;
