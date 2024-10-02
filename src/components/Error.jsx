const Error = ({ message }) => {
  return (
    <div className="bg-red-500 h-fit rounded p-4 flex-col gap-5 mt-44 mx-auto">
      <p>Üzgünüz bir hata oluştu daha sonra tekrar deneyin</p>
      <h2 className="font-semibold">{message}</h2>
    </div>
  );
};

export default Error;
