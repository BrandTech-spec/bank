const Features = ({ data }) => {
  return (
    <div>
      {data.map((d) => {
        if (d.type === "") {
          <section>
            <div className="w-full py-2 px-2 flex items-center ">
              <span></span>
              <p></p>
            </div>

            <p></p>
            <ul>
                
            </ul>
          </section>;
        }
      })}
    </div>
  );
};

export default Features;
