type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;            //! <<====== assign sebuah nilai ke variabel dengan cara destructuring props nya
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! Anda punya ${messageCount} pesan yang belum dibaca`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};
