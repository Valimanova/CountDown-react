import  "./Button.css";
const CustomButton = ({id,children}) => {
    // const Newtext = text + " button";
    return (
       <button className="btn" id={id}>
        {children} 
       </button>
    );
}

export default CustomButton;

