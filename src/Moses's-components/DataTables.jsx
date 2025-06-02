import React from 'react';
import "./styles.css"

export const DataTables = () => {
	return (
		<section className='flex justify-center flex-col items-start max-w-[72.625rem] bg-surface-white rounded-[0.5rem] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] font-Lato shrink-0 ml-60'>
			<div className='h-[4.375rem] min-lg:p-[1rem] grid grid-cols-4 min-md:grid-cols-5 min-lg:grid-cols-6 w-full items-center border-t-1 border-t-background border-b-1 border-b-background text-dark text-[1.125rem] font-[500] gap-[1.5rem]'>
				<span className='text-center min-lg:text-start'>Name </span>
				<span>Position </span>
				<span className='min-lg:text-center'>Age </span>
				<span className='hidden min-lg:grid'>Office </span>
				<span>Salary </span>
				<span className='hidden min-md:grid'>Start date </span>
			</div>
			<PersonalData
				name='Tiger Nixon'
				position='System Architect'
				age={61}
				office='Tokyo'
				salary='170,750'
				startDate='22/05/2009'
				img='assets/images/data-images/tiger-nixon.png'
			/>
			<PersonalData
				name='Garrett Winters'
				position='Accountant'
				age={63}
				office='San Francisco'
				salary='433,060'
				startDate='22/05/2011'
				img='assets/images/data-images/garrett-winters.png'
			/>
			<PersonalData
				name='Ashton Cox'
				position='Technical Director'
				age={66}
				office='Edinburgh'
				salary='320,800'
				startDate='25/05/2011'
				img='assets/images/data-images/Ashton-cox2.png'
			/>
			<PersonalData
				name='Tiger Nixon'
				position='Javascript Developer'
				age={22}
				office='Tokyo'
				salary='170,500'
				startDate='22/05/2012'
				img='assets/images/data-images/Tiger-nixon2.png'
			/>
			<PersonalData
				name='Cedric Kelly'
				position='Integration Specialist'
				age={31}
				office='New York'
				salary='86,000'
				startDate='22/05/2012'
				img='assets/images/data-images/cedric-kelly.png'
			/>
			<PersonalData
				name='Airi Satou'
				position='Sales Assistant'
				age={45}
				office='Edinburgh'
				salary='433,060'
				startDate='30/05/2009'
				img='assets/images/data-images/airi-satou.png'
			/>
			<PersonalData
				name='Brielle Williamson'
				position='Integration Specialist'
				age={19}
				office='Berlin'
				salary='162,700'
				startDate='22/05/2005'
				img='assets/images/data-images/b.williamson.png'
			/>
			<PersonalData
				name='Herrod Chandler'
				position='Javascript Developer'
				age={61}
				office='Islamabad'
				salary='372,000'
				startDate='28/05/2016'
				img='assets/images/data-images/herrod-chandler.png'
			/>
			<PersonalData
				name='Rhona Davidson'
				position='Software Engineer'
				age={59}
				office='Delhi'
				salary='137,500'
				startDate='22/05/2006'
				img='assets/images/data-images/rhona-davidson.png'
			/>
			<PersonalData
				name='Colleen Hurst'
				position='Accountant'
				age={55}
				office='London'
				salary='327,900'
				startDate='21/05/2008'
				img='assets/images/data-images/colleen-hurst.png'
			/>
			<PersonalData
				name='Sonya Frost'
				position='Sales Assistant'
				age={41}
				office='Karachi'
				salary='205,500'
				startDate='22/05/2010'
				img='assets/images/data-images/sonya-frost.png'
			/>
			<PersonalData
				name='Ashton Cox'
				position='Technical Author'
				age={36}
				office='New York'
				salary='103,600'
				startDate='21/05/2013'
				img='assets/images/data-images/ashton-cox.png'
			/>
		</section>
	);
};

const PersonalData = ({
	name,
	position,
	age,
	office,
	salary,
	startDate,
	img,
}) => {
	return (
		<div className='h-[4.375rem] min-lg:p-[1rem] grid grid-cols-4 min-md:grid-cols-5 min-lg:grid-cols-6 w-full items-center border-t-1 border-t-background border-b-1 border-b-background text-light font-[400] text-[0.7rem] min-lg:text-[0.88875rem] gap-[1.5rem]'>
			<div className='flex flex-col min-lg:flex-row gap-0 items-center min-lg:gap-[0.625rem]'>
				<img
					src={img}
					alt={img}
					className='w-[1.5rem] min-lg:w-[2.5rem] min-lg:h-[2.5rem] rounded-[1.875rem]'
				/>
				<span className='text-center'>{name} </span>
			</div>
			<span>{position} </span>
			<span className='min-lg:text-center'>{age} </span>
			<span className='hidden min-lg:grid'>{office} </span>
			<span>$ {salary} </span>
			<span className='hidden min-md:grid'>{startDate} </span>
		</div>
	);
};
