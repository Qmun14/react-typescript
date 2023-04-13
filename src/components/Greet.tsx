type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! Anda punya ${props.messageCount} pesan yang belum dibaca`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};
