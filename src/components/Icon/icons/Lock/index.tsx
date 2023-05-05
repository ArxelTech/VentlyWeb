import * as React from "react";
import { SVGProps } from "react";

const Lock = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="17.709" height="19.988" viewBox="0 0 17.709 19.988"><path stroke="rgba(141,166,194,0.62)" fill="#444" opacity="0.62" d="M83.936,19.114H82.851V15.7a5.7,5.7,0,1,0-11.393,0v3.418H68.8v9.874H85.509V19.114ZM72.092,15.7a5.063,5.063,0,0,1,10.126,0v3.418H72.092ZM84.876,28.354H69.434V19.748H84.876Z" transform="translate(-68.3 -9.5)"/></svg>
);

const lock = Lock;
export { lock }; 
