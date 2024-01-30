import React, { useEffect, useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    const getData = async () => {
      fetch(`https://dummyjson.com/users/search?q=${input}`)
        .then((response) => response.json())
        .then((json) => {
          setSuggestion(json.users);
        });
    };
    if (input !== "") {
      getData();
    }
  }, [input]);
  return (
    <div className="app">
      <div className="search-outer">
        <div className="user-pill">
          {selected?.length > 0 &&
            selected?.map((res) => {
              return (
                <span>
                  {res?.username} <button>X</button>
                </span>
              );
            })}
        </div>
        <input
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {suggestion?.length > 0 && input !== "" && (
        <ul>
          {suggestion?.map((res) => {
            return (
              <li
                onClick={() =>
                  setSelected((prev) => {
                    if (prev.includes(res)) {
                      return prev?.filter((item) => {
                        return item?.id !== res?.id;
                      });
                    } else {
                      setSuggestion([]);
                      setInput("");
                      return [...prev, res];
                    }
                  })
                }
              >
                {res?.username}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
