import { Circle, Clock, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

type Event = {
	content: EventContent[];
	time: string;
}

type EventContent = {
	title: string;
	participants?: { professor?: string, link?: string, description?: string }[];
	professor?: string;
	link?: string | undefined;
	description?: string;
	moderator?: { professor?: string, link?: string, description?: string };
}

export default function EventCard({ event }: { event: Event }) {
	return (
		<Card>
			<CardContent className="px-10 py-6">
				<div className="grid grid-cols-1 lg:grid-cols-12 p-4 gap-6">
					<div className="flex justify-start items-center text-center lg:border-r-2 text-gray-500 lg:col-span-3">
						<Clock className="mr-2 h-4 w-4" /> <p className="text-xl">{event.time}</p>
					</div>
					<div className="flex flex-col lg:col-span-9 gap-8">
						{event.content.map((eventItem, index) => (
							<div key={index} className="flex flex-col gap-4 justify-center">
								<h3 className={`text-2xl font-bold text-primary flex ${eventItem.title === "Participants: " || eventItem.title === "Moderator: " ? "text-xl font-normal" : ""}`}>
									{eventItem.title === "Participants: " && <>
										<Users /> &nbsp;
									</>}
									{eventItem.title}
								</h3>
								{eventItem.professor && (
									<p className="text-gray-700 text-md">
										<a href={eventItem.link} target="_blank" rel="noopener noreferrer">
											<span className="text-secondary underline hover:text-amber-400">{eventItem.professor}</span>
										</a>
										{eventItem.description && `, ${eventItem.description}`}
									</p>
								)}

								{eventItem.participants && eventItem.participants.length > 0 && (
									eventItem.participants.map((participant, idx) => (
										<div key={idx} className="flex items-center gap-2 text-md text-gray-700">
											<Circle className="h-3 w-3 text-secondary" fill="#ef7c00" />
											{participant.professor && (
												<>
													<a
														href={participant.link}
														target="_blank"
														rel="noopener noreferrer"
													>
														<span className="text-secondary underline hover:text-amber-400">{participant.professor}</span>{participant.description ? `, ${participant.description}` : ""}
													</a>
												</>
											)}
										</div>
									))
								)}

								{eventItem.moderator && (
									<p className="text-gray-700 text-md">
										{eventItem.moderator.professor && (
											<>
												<a href={eventItem.moderator.link} target="_blank" rel="noopener noreferrer">
													<span className="text-secondary underline hover:text-amber-400">{eventItem.moderator.professor}</span>
												</a>
												{eventItem.moderator.description ? `, ${eventItem.moderator.description}` : ""}
											</>
										)}
									</p>
								)}
							</div>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	)
}