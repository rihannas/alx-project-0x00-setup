import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className='text-xl font-extralight'>Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <div className='mt-6 flex gap-4'>
        <Button
          title='Small Rounded'
          className='text-sm rounded-sm'
        />
        <Button
          title='Medium Rounded'
          className='text-base rounded-md'
        />
        <Button
          title='Large Rounded'
          className='text-lg rounded-full'
        />
      </div>
    </div>
  );
};

export default Landing;
