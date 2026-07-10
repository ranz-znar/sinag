import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";

function Search(props) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={1}>
        <TextField
          id="outlined-location-input"
          label="Enter location"
          type="text"
          size="small"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              height: 40,
              backgroundColor: "#ffffff",
              borderRadius: 2,
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{
            height: 40,
            backgroundColor: "#1a2b4c",
            "&:hover": {
              backgroundColor: "#132038",
            },
          }}
        >
          Go
        </Button>
      </Stack>
    </form>
  );
}

export default Search;
