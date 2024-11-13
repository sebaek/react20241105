import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp68(props) {
  return (
    <div>
      <Button>sub11경로 : 403</Button>
      <Button>sub10경로 : 202</Button>
      <Button>sub9경로 : 405</Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub8");
        }}
      >
        no content
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub7");
        }}
      >
        not found
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub6");
        }}
      >
        ok
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub5");
        }}
      >
        500 server error
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub4");
        }}
      >
        404 not found
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub3");
        }}
      >
        200 ok
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub2");
        }}
      >
        404 not found
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub1");
        }}
      >
        200 ok
      </Button>
    </div>
  );
}

export default MyApp68;
