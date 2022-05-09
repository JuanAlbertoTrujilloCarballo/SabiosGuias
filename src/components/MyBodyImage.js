

export default function MyBodyImage(props){
  return (
    <>
    <img src={props.src} alt={props.alt}/>
    <samp>{props.frase}</samp>
    </>
  );
}