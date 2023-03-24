import Button from "./Button";

const ButtonList = () => {
    const lists = ["All", "Music", "Mixes", "JavaScript", "News", "Data Structures", "Shah Rukh Khan", "Comedy", "Gaming", "Cricket", "Recently Watched", "Cricket", "News"];

    return(
        
        <div className="flex">
            {
            
            lists.map((name, index) => (
                <Button name = {name} key = {index}/>
            ))
                
            }
        </div>
        
    );
};

export default ButtonList;