import React from 'react';
import "./styles.css"

export const Calendar = () => {
	return (
		<section className='flex justify-center gap-[2rem] font-Lato p-[1rem] bg-background'>
			<div className='calendar-col1 bg-surface-white'>
				<p className='text-dark text-[1rem] font-[500]'>Details Day</p>
				<p className='text-[0.88875rem] text-light'>
					Don't miss scheduled events
				</p>
				<EventCard
					tag='Festival'
					location='Berlin'
					color='#6E39CB'
					bgTimeTag='#F0ECF6'
					time='12am to 2pm'
					date='Monday, Jan 4, 2022'
				/>
				<EventCard
					tag='Exam'
					location='France'
					color='#533FE4'
					bgTimeTag='#EEFFE5'
					time='12am to 2pm'
					date='Monday, Jan 4, 2022'
				/>
				<EventCard
					tag='Eid festival'
					location='Germany'
					color='#F93131'
					bgTimeTag='#FFF5F5'
					time='12am to 3pm'
					date='Tuesday, Jan 5, 2022'
				/>
				<EventCard
					tag='Conference'
					location='UK'
					color='#2DCCFF'
					time='12am to 2pm'
					bgTimeTag='#F4FCFF'
					date='Friday, Jan 8, 2022'
				/>
				<EventCard
					tag='Design Review'
					location='Berlin'
					time='12am to 2pm'
					bgTimeTag='#FFF5D8'
					color='#FBBC05'
					date='Monday, Jan 9, 2022'
				/>
				<EventCard
					tag='Glastobury'
					location='Sweden'
					time='12am to 2pm'
					bgTimeTag='#EBF4FF'
					color='#1877F2'
					date='Friday, Jan 1, 2022'
				/>
				<EventCard
					tag='Sport'
					location='Switzerland'
					time='12am to 2pm'
					bgTimeTag='#FFF1D4'
					color='#FFA800'
					date='Tuesday, Jan 2, 2022'
				/>
				<div className='!h-[2.5rem] w-full calendar-card p-[0.75rem] flex flex-col gap-[0.5rem] cursor-pointer'>
					<div className='flex gap-[2.75rem] items-center'>
						<span className='w-[6.5rem]'>Design Review</span>
						<span
							className={`border-[0.5px] text-[0.625rem] calendar-time-tag w-[4.8125rem]`}
							style={{
								border: `0.5px solid #6E39CB`,
								background: '#F0ECF6',
								color: '#6E39CB',
							}}
						>
							12am to 2pm
						</span>
					</div>
				</div>
			</div>
			<div className='bg-surface-white calendar-col2 p-[1.5rem] flex flex-col gap-[2.5rem]'>
				<section className='calendar-header'>
					<div className='inline-flex items-center gap-[0.5rem]'>
						<img
							className='arrow'
							src='assets/images/calendar-images/calendar-arrow-left.svg'
							alt='arrow-left'
						/>
						<span>January 2022</span>
						<img
							className='arrow'
							src='assets/images/calendar-images/calendar-arrow-right.svg'
							alt='arrow-right'
						/>
					</div>
					<div className='flex items-center gap-[0.94rem] text-[0.88875rem]'>
						<span className=' p-[0.25rem_0.75rem] rounded-[0.5rem] bg-[#EEE4FF] text-primary'>
							Today
						</span>
						<div className='inline-flex items-center gap-[0.25rem]'>
							<p>
								Sort By: <span className='text-light'>Month</span>
							</p>
							<img
								src='assets/images/calendar-images/calendar-down.svg'
								alt='arrow down'
								className='w-[1.125rem] h-[1.125rem]'
							/>
						</div>
						<img
							src='assets/images/calendar-images/calendar-three-dot.svg'
							alt='ellipses'
							className='w-[1.125rem] h-[1.125rem]'
						/>
					</div>
				</section>
				<section className=''>
					<div className='days-row'>
						<div className='day rounded-tl-lg'>Sun</div>
						<div className='day'>Mon</div>
						<div className='day'>Tue</div>
						<div className='day'>Wed</div>
						<div className='day'>Thur</div>
						<div className='day'>Fri</div>
						<div className='day rounded-tr-lg'>Sat</div>
					</div>
					<div className='calendar-row'>
						<div className='calendar-number'>27</div>
						<div className='calendar-number'>28</div>
						<div className='calendar-number'>29</div>
						<div className='calendar-number'>30</div>
						<div className='calendar-number'>31</div>
						<div className='calendar-number'>1</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							2
						</div>
					</div>
					<div className='calendar-row relative'>
						<div className='calendar-number !text-dark !bg-surface-white'>
							3
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							4
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							5
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							6
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							7
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							8
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							9
						</div>
						<div className='design-pattern1 top-[6.2rem] right-[7.1rem]'>
							<div className='w-[0.1875rem] bg-success h-[2.375rem]'></div>
							<div className='text-[0.625rem] text-success text-center'>
								Weekend Festival
							</div>
						</div>
					</div>
					<div className='calendar-row relative'>
						<div className='calendar-number !text-dark !bg-surface-white'>
							10
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							11
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							12
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							13
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							14
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							15
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							16
						</div>
						<div className='design-pattern2 left-0 top-[6.2rem]'>
							<div className='rec bg-secondary'></div>
							<div className='text-[0.625rem] text-secondary'>
								Weekend Festival
							</div>
						</div>
						<div className='design-pattern3 top-[6.2rem]'>
							<div className='rec bg-[#1877F2]'></div>
							<div className='text-[#1877F2] text-[0.625rem]'>Eid Festival</div>
						</div>
					</div>
					<div className='calendar-row relative'>
						<div className='calendar-number !text-dark !bg-surface-white'>
							17
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							18
						</div>
						<div className='calendar-number !text-dark !bg-surface-white relative'>
							19
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							20
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							21
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							22
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							23
						</div>
						<div className='design-pattern4'>
							<div className='rec bg-primary'></div>
							<div className='text-[0.625rem] text-primary'>
								Design conference
							</div>
						</div>
						<div className='design-pattern5'>
							<div className='rec bg-[#FFA800]'></div>
							<div className='text-[0.625rem] text-[#FFA800]'>
								Glastonbury festival
							</div>
						</div>
					</div>
					<div className='calendar-row relative'>
						<div className='calendar-number !text-dark !bg-surface-white'>
							24
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							25
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							26
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							27
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							28
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							29
						</div>
						<div className='calendar-number !text-dark !bg-surface-white'>
							30
						</div>
						<div className='design-pattern6'>
							<div className='rec bg-[#FFA800]'></div>
							<div className='text-[0.625rem] text-[#FFA800]'>
								Design conference
							</div>
						</div>
						<div className='design-pattern7'>
							<div className='rec bg-danger'></div>
							<div className='text-[0.625rem] text-danger'>
								Glastonbury festival
							</div>
						</div>
					</div>
					<div className='calendar-row'>
						<div className='calendar-number !text-dark !bg-surface-white rounded-bl-lg'>
							31
						</div>
						<div className='calendar-number'>1</div>
						<div className='calendar-number'>2</div>
						<div className='calendar-number'>3</div>
						<div className='calendar-number'>4</div>
						<div className='calendar-number'>5</div>
						<div className='calendar-number rounded-br-lg'>6</div>
					</div>
				</section>
			</div>
		</section>
	);
};

const EventCard = ({ tag, location, time, color, bgTimeTag, date }) => {
	return (
		<div className='calendar-card p-[0.75rem] flex flex-col gap-[0.5rem] cursor-pointer'>
			<div className='flex gap-[2.75rem] items-center'>
				<span className='w-[6.5rem]'>{tag}</span>
				<span
					className={`border-[0.5px] text-[0.625rem] calendar-time-tag w-[4.8125rem]`}
					style={{
						border: `0.5px solid ${color}`,
						background: bgTimeTag,
						color: color,
					}}
				>
					{/* 12am to 3pm */}
					{time}
				</span>
			</div>
			<p className='text-[0.79rem]'>{location}</p>
			<div className='inline-flex items-center gap-[1.5rem]'>
				<img
					src='assets/images/calendar-images/calendar-icon.svg'
					alt='calendar icon'
				/>
				<span className='text-[0.79rem]'>{date}</span>
			</div>
		</div>
	);
};
