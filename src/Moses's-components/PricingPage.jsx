import React from 'react';
import "./styles.css"

export const PricingPage = () => {
	return (
		<section className='font-Lato bg-background flex flex-col p-[1rem] gap-[2rem] max-w-[71rem] items-center mx-auto min-md:items-start ml-60'>
			<div className='inline-flex flex-col min-lg:gap-[6.25rem] min-md:gap-[3.125rem] min-md:flex-row min-md:items-center'>
				<h2 className='text-[1.60188rem] text-primary font-[700]'>
					Pricing page
				</h2>
				<div className='flex p-[0.8125rem_0.9375rem_0.875rem_0.9375rem] justify-center items-center gap-[8.75rem] border-1 border-border bg-surface-white rounded-[1.875rem]'>
					<input
						type='text'
						placeholder='Search anything here...'
						className='placeholder:text-[0.88875rem] placeholder:text-light outline-none placeholder:font-DM-sans'
					/>
					<img
						src='assets/images/search-icon.svg'
						alt='search icon'
						className='w-[0.8125rem] h-[0.875rem] cursor-pointer'
					/>
				</div>
			</div>
			<div className='inline-flex flex-col justify-center gap-[0.625rem] items-start'>
				<h2 className='text-[1.60188rem] font-[700] text-dark'>Pricing</h2>
				<p className='text-[0.79rem] text-light font-[400]'>
					Simple Pricing. No Hidden Fees. Advance Features for your business.
				</p>
			</div>
			<div className='grid gap-[2rem] min-md:grid-cols-2 px-[1rem] min-md:px-[1rem] min-xl:grid-cols-3'>
				<div className='bg-surface-white lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] p-[1.875rem_1.875rem_3.0625rem_1.875rem] w-[21.875rem] h-[27.875rem] flex flex-col rounded-[0.5rem] gap-[1.7rem]'>
					<div className='flex flex-col gap-0'>
						<h2 className='text-dark text-[1.80188rem] font-[700]'>
							Free/Personal
						</h2>
						<p className='text-[0.79rem] text-light'>For a Lifetime</p>
					</div>
					<button className='flex h-[2rem] p-[0.5rem_0rem_0.5625rem_0rem] items-center justify-center border-1 border-border rounded-[0.25rem] text-[0.79rem] text-light'>
						Current Plan
					</button>
					<div className='grid gap-[1.4rem]'>
						<div className='flex items-center gap-[1rem]'>
							<img
								src='/assets/images/icon-check-empty.svg'
								alt=''
							/>
							<span className='text-[0.625rem] text-light'>
								Unlimited Projects
							</span>
						</div>
						<div className='flex items-center gap-[1rem]'>
							<img
								src='/assets/images/icon-checked.svg'
								alt=''
							/>
							<span className='text-[0.625rem] text-light'>
								Share with 5 team members
							</span>
						</div>
						<div className='flex items-center gap-[1rem]'>
							<img
								src='/assets/images/icon-check-empty.svg'
								alt=''
							/>
							<span className='text-[0.625rem] text-light'>
								Sync across devices
							</span>
						</div>
						<div className='flex items-center gap-[1rem]'>
							<img
								src='/assets/images/icon-checked.svg'
								alt=''
							/>
							<span className='text-[0.625rem] text-light'>API Access</span>
						</div>
						<div className='flex items-center gap-[1rem]'>
							<img
								src='/assets/images/icon-check-empty.svg'
								alt=''
							/>
							<span className='text-[0.625rem] text-light'>
								Complete Documentation
							</span>
						</div>
						<div className='flex items-center gap-[1rem]'>
							<img
								src='/assets/images/icon-checked.svg'
								alt=''
							/>
							<span className='text-[0.625rem] text-light'>
								Integration help
							</span>
						</div>
					</div>
				</div>
				<div className='bg-surface-white lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] p-[1.875rem_1.875rem_3.0625rem_1.875rem] w-[21.875rem] h-[27.875rem] flex flex-col rounded-[0.5rem] gap-[1.7rem]'>
					<div className='flex flex-col gap-0'>
						<h2 className='text-dark text-[1.80188rem] font-[700]'>
							$89/Professional
						</h2>
						<p className='text-[0.79rem] text-light'>/year</p>
					</div>
					<button className='flex h-[2rem] p-[0.3125rem_0rem_0.5rem_0rem] items-center justify-center border-1 border-border rounded-[0.5rem] text-[1rem] text-surface-white font-[500] bg-primary'>
						Try for free
					</button>
					<div className='grid gap-[1.4rem]'>
						<div className='flex items-center gap-[1rem]'>
							<img
								src='/assets/images/icon-check-empty.svg'
								alt=''
							/>
							<span className='text-[0.625rem] text-light'>
								Everything in free plan
							</span>
						</div>
						<div className='flex items-center gap-[1rem]'>
							<img
								src='/assets/images/icon-checked.svg'
								alt=''
							/>
							<span className='text-[0.625rem] text-light'>
								Unlimited projects
							</span>
						</div>
						<div className='flex items-center gap-[1rem]'>
							<img
								src='/assets/images/icon-check-empty.svg'
								alt=''
							/>
							<span className='text-[0.625rem] text-light'>
								Share with 5 team members
							</span>
						</div>
						<div className='flex items-center gap-[1rem]'>
							<img
								src='/assets/images/icon-checked.svg'
								alt=''
							/>
							<span className='text-[0.625rem] text-light'>
								30-day version history
							</span>
						</div>
						<div className='flex items-center gap-[1rem]'>
							<img
								src='/assets/images/icon-check-empty.svg'
								alt=''
							/>
							<span className='text-[0.625rem] text-light'>
								Complete Documentation
							</span>
						</div>
						<div className='flex items-center gap-[1rem]'>
							<img
								src='/assets/images/icon-checked.svg'
								alt=''
							/>
							<span className='text-[0.625rem] text-light'>
								Integration help
							</span>
						</div>
					</div>
				</div>
				<div className='bg-surface-white lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] p-[1.875rem_1.875rem_3.0625rem_1.875rem] w-[21.875rem] h-[27.875rem] flex flex-col rounded-[0.5rem] gap-[1.7rem]'>
					<div className='flex flex-col gap-0'>
						<h2 className='text-dark text-[1.80188rem] font-[700]'>
							Custom/Enterprise
						</h2>
						<p className='text-[0.79rem] text-light'>Reach out for a quote</p>
					</div>
					<button className='flex h-[2rem] p-[0.3125rem_0rem_0.5rem_0rem] items-center justify-center border-1 border-border rounded-[0.5rem] text-[1rem] text-surface-white font-[500] bg-primary'>
						Contact Us
					</button>
					<div className='grid gap-[1.4rem]'>
						<div className='flex items-center gap-[1rem]'>
							<img
								src='/assets/images/icon-check-empty.svg'
								alt=''
							/>
							<span className='text-[0.625rem] text-light'>
								Everythiong in Team plan
							</span>
						</div>
						<div className='flex items-center gap-[1rem]'>
							<img
								src='/assets/images/icon-checked.svg'
								alt=''
							/>
							<span className='text-[0.625rem] text-light'>
								Advanced security
							</span>
						</div>
						<div className='flex items-center gap-[1rem]'>
							<img
								src='/assets/images/icon-check-empty.svg'
								alt=''
							/>
							<span className='text-[0.625rem] text-light'>
								Custom contract
							</span>
						</div>
						<div className='flex items-center gap-[1rem]'>
							<img
								src='/assets/images/icon-checked.svg'
								alt=''
							/>
							<span className='text-[0.625rem] text-light'>
								User provisioning ( SCIM)
							</span>
						</div>
						<div className='flex items-center gap-[1rem]'>
							<img
								src='/assets/images/icon-check-empty.svg'
								alt=''
							/>
							<span className='text-[0.625rem] text-light'>
								Complete Documentation
							</span>
						</div>
						<div className='flex items-center gap-[1rem]'>
							<img
								src='/assets/images/icon-checked.svg'
								alt=''
							/>
							<span className='text-[0.625rem] text-light'>SAML SSO</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
