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
          styles='text-sm rounded-sm'
        />
        <Button
          title='Medium Rounded'
          styles='text-base rounded-md'
        />
        <Button
          title='Large Rounded'
          styles='text-lg rounded-full'
        />
        <Button
          title='Extra Large Rounded'
          styles='text-lg rounded-lg'
        />
      </div>
    </div>
  );
};

export default Landing;
