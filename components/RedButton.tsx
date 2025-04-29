type RedButtonProps = {
  buttonType: "submit" | "reset" | "button" | undefined;
  buttonName: string;
};

function RedButton({ buttonType, buttonName }: RedButtonProps) {
  return (
    <button
      type={buttonType}
      className="flex-none rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-red-900"
    >
      {buttonName}
    </button>
  );
}

export default RedButton;
