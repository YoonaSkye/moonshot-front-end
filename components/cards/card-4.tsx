import { Card } from '@/components/ui/card';
import { Icon } from '../Icons';
import './style.css';

export function Card4() {
  return (
    <div className="relative">
      <Card
        style={{
          width: '416px',
          height: '278px',
          borderRadius: '36px',
        }}
        className="border-none bg-[#111111] flex justify-center items-center relative hover:translate-x-1 hover:-translate-y-1"
      >
        <div className="w-[46px] h-1 bg-gradient-to-r from-[#E0AD38] to-[#EB3E1C] absolute left-[31px] top-[29px] z-10" />
        <div className="absolute left-[30px] top-[180px] title z-10">
          What is Bitcoin
        </div>
        <div className="absolute left-[259px] bottom-[16px] flex justify-center items-center gap-2 z-10">
          <Icon name="clock" />
          <span className="icon">36 Hour</span>
        </div>
        <div className="card" style={{ backgroundColor: '#B6E1D8' }}>
          <div className="d1 bg-[#131313] w-[45%] h-[40px] absolute left-0 top-0 rounded-br-[30px]"></div>
          <div className="d2 bg-[#131313] w-[175px] h-[94px] absolute left-0 bottom-0 rounded-tr-[28px]"></div>
          <div className="d3 bg-[#131313] w-[170px] h-[24px] absolute right-[40px] bottom-0 rounded-tr-[16px]"></div>
        </div>
      </Card>
      <Card4Skeleton />
    </div>
  );
}

export function Card4Skeleton() {
  return (
    <div
      className="absolute top-0 -z-10"
      style={{
        width: '416px',
        height: '278px',
        borderRadius: '36px',
        background: 'linear-gradient(180deg, #E0AD38 -0.01%, #EB3E1C 99.99%)',
      }}
    ></div>
  );
}
