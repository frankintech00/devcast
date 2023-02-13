import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from 'react-accessible-accordion';

// Array of week days
const WEEK_DAYS = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];

const Forecast = ({ data }) => {
	// Get the current day of the week
	const dayInAWeek = new Date().getDay();

	// Arrange week days in the order starting from the current day
	const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
		WEEK_DAYS.slice(0, dayInAWeek)
	);

	return (
		<div className='p-5'>
			{/* Displays the label "Daily Forecast" */}
			<label className='text-white'>Forecast for the next 7 days</label>
			<Accordion allowZeroExpanded>
				{/* Splices the first 7 items from the data list and maps through each item to render an AccordionItem component */}
				{data.list.splice(0, 7).map((item, idx) => (
					<AccordionItem key={idx}>
						<AccordionItemHeading>
							{/* Renders the AccordionItemButton component that displays the daily forecast information */}
							<AccordionItemButton>
								<div className='flex items-center px-5 py-2 my-2 text-sm font-medium bg-gray-200 rounded-lg cursor-pointer h-11'>
									{/* Displays the weather icon */}
									<img
										src={`/icons/${item.weather[0].icon}.png`}
										className='cursor-pointer w-11 h-11'
										alt='weather'
									/>
									{/* Displays the day of the forecast */}
									<label className='flex-1 ml-3 font-bold text-gray-800 cursor-pointer'>
										{forecastDays[idx]}
									</label>
									{/* Displays the description of the weather */}
									<label className='flex-1 mr-5 font-bold text-right text-gray-800 cursor-pointer'>
										{item.weather[0].description}
									</label>
									{/* Displays the temperature range */}
									<label className='cursor-pointer'>
										{Math.round(item.main.temp_max)}°C /
										{Math.round(item.main.temp_min)}°C
									</label>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							{/* Wrapper for accordion item panel */}
							<div className='grid flex-1 gap-0 p-5 grid-col-15 grid-template-cols-auto-auto'>
								{/* Flexbox container for the weather information */}
								<div className='flex items-center justify-start h-30'>
									{/* Pressure label and value */}
									<label className='mr-2 text-gray-100'>Pressure:</label>
									<label className='text-gray-100'>{item.main.pressure}</label>
								</div>
								<div className='flex items-center justify-start h-30'>
									{/* Humidity label and value */}
									<label className='mr-2 text-gray-100'>Humidity:</label>
									<label className='text-gray-100'>{item.main.humidity}</label>
								</div>
								<div className='flex items-center justify-start h-30'>
									{/* Clouds label and value */}
									<label className='mr-2 text-gray-100'>Clouds:</label>
									<label className='text-gray-100'>{item.clouds.all}%</label>
								</div>
								<div className='flex items-center justify-start h-30'>
									{/* Wind speed label and value */}
									<label className='mr-2 text-gray-100'>Wind speed:</label>
									<label className='text-gray-100'>{item.wind.speed} m/s</label>
								</div>
								<div className='flex items-center justify-start h-30'>
									{/* Sea level label and value */}
									<label className='mr-2 text-gray-100'>Sea level:</label>
									<label className='text-gray-100'>
										{item.main.sea_level}m
									</label>
								</div>
								<div className='flex items-center justify-start h-30'>
									{/* Feels like label and value */}
									<label className='mr-2 text-gray-100'>Feels like:</label>
									<label className='text-gray-100'>
										{item.main.feels_like}°C
									</label>
								</div>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default Forecast;
