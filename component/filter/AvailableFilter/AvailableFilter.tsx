import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";


export default function AvailableFilter() {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked color="warning"/>} label="فقط کالاهای موجود" />
      <hr />
      <FormControlLabel control={<Switch color="warning"/>} label="فقط کالاهای پیشنهاد روز" />
    </FormGroup>
  );
}
