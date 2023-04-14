type PlaceHolderProps = {
  children: string;
}

export const Heading = (props: PlaceHolderProps) => {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  )
}
