import { useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { cacheResults } from "../store/searchSlice";
import { searchAPI } from "../utils/constants";







const Header = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);


    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();


    useEffect(() => {
        const timer = setTimeout(() => {
          if (searchCache[searchQuery]) {
            setSuggestions(searchCache[searchQuery]);
          } else {
            getSearchSugsestions();
          }
        }, 200);
    
        return () => {
          clearTimeout(timer);
        };
      }, [searchQuery]);
    




    const getSearchSugsestions = async () => {
        const data = await fetch(searchAPI + searchQuery);
        const json = await data.json();
        //console.log(json[1]);
        setSuggestions(json[1]);
    
        // update cache
        dispatch(
          cacheResults({
            [searchQuery]: json[1],
          })
        );
      };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    };
    return(
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            
            <div className="flex col-span-1">
                <img
                onClick={() => toggleMenuHandler()}  
                className="h-8 cursor-pointer" 
                alt= "menu" 
                src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
                />
                <img 
                alt= "youtube-logo" 
                src = "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"  
                className="h-10 mx-2"
                />
                
            </div>
            

            <div className="col-span-10 px-10">
                <input 
                className = "w-1/2 border border-gray-400 p-2 rounded-l-full" 
                type = "text"
                value= {searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
                
                />
                <button className="border border-gray-400 p-2 rounded-r-full">🔍</button>
            </div>

            {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}

            <div className = "col-span-1">
                <img alt = "user" src = "https://image.shutterstock.com/image-vector/thin-line-user-icon-on-260nw-519039097.jpg" className="h-8"/>
            </div>
        </div>
    )

};

export default Header;