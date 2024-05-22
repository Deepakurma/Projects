
const Navlinks = (props) => {
  return (
    <ul>
        <li onClick={() => props.ismobile && props.closemenu()}><img className="nimg" src="https://clascxy.in/cdn/shop/files/cl_s-fotor-20230616132722.png?v=1687025516&width=75"></img></li>
        <li onClick={() => props.ismobile && props.closemenu()}><a href="">Home</a></li>
        <li onClick={() => props.ismobile && props.closemenu()}><a href="https://clascxy.in/pages/men">MEN</a></li>
        <li onClick={() => props.ismobile && props.closemenu()}><a href="https://clascxy.in/collections/women">WOMEN</a></li>
    </ul>
  );
};

export default Navlinks;
