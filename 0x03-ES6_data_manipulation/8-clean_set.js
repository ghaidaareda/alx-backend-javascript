export default function cleanSety(set, startString) {
const arraySet = [...set];
const slicedarray = arraySet
    .filter(item => item.startsWith(startString))
    .map(item => item.slice(startString.length));
return (slicedarray.join('-')); }
