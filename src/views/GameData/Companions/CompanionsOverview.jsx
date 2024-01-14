import { companions } from '../../../data/companions/companions';
import { CompanionIcon } from '../../../components/CompanionIcon/CompanionIcon';

export const CompanionsOverview = () => {
	const companionIcons = companions.map((companion) => {
		return (
			<CompanionIcon
				key={companion.name}
				companion={companion}
			/>
		);
	});
	return (
		<div className='h-[600px] bg-secondary'>
			<div className='flex flex-col justify-center items-center bg-gray-700'>
				<h1 className='text-2xl m-2'>Companion Data Overview</h1>
				<p className='text-sm m-2'>Shows all data added for companions.</p>
			</div>
			<div className='bg-primary px-4 py-2 m-4 border-2 border-solid border-accent'>
				<div className='bg-secondary py-2 my-2 w-full'>
					<h2 className='text-xl text-center'>Companions</h2>
				</div>
				<div className='w-full bg-secondary p-4 my-2'>{companionIcons}</div>
			</div>
		</div>
	);
};
