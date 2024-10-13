interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return <h1 className='py-7 uppercase tracking-widest'>{title}</h1>;
};

export default Heading;
