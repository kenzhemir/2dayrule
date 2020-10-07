import React, { cloneElement } from "react";
import moment from "moment";

moment.updateLocale("en", {
	week: {
		dow: 1
	}
});

const RulesCalendar = () => {
	let number_of_weeks = 5;
	const doneDays = [
		moment("2020-02-24"),
		moment("2020-02-28"),
		moment("2020-03-13"),
		moment("2020-03-15"),
		moment("2020-03-07")
	];
	const calendar = [];
	let date = moment()
		.startOf("month")
		.startOf("week");
	const doneDaysIndexes = doneDays
		.map(val => val.diff(date, "days"))
		.filter(val => val >= 0)
		.sort((a, b) => a - b);
	let todayIndex = moment().diff(date, "days");
	console.log(doneDaysIndexes);
	for (let i = 0, doneIndex = 0, dayIndex = 0; i < number_of_weeks; i++) {
		let week = [];
		for (let i = 0; i < 7; i++) {
			const done = doneDaysIndexes[doneIndex] == dayIndex;
			const icon = todayIndex > dayIndex ? (done ? "🟢" : "🔴") : undefined;
			week.push({ date, icon });
			date = date.clone().add(1, "day");
			dayIndex++;
			if (done || doneDaysIndexes[doneIndex] < dayIndex) doneIndex++;
		}
		calendar.push(week);
	}
	console.log(calendar);
	console.log(doneDaysIndexes);
	const weekdays = moment.weekdaysShort(true);
	return (
		<div className="calendar">
			<div className="calendar__title">The two day rule</div>
			<div className="calendar__weekday-row">
				{weekdays.map(weekday => (
					<div className="calendar__weekday-cell" key={weekday}>
						{weekday}
					</div>
				))}
			</div>
			<div className="calendar__month-grid">
				{calendar.map((week, weekNum) => (
					<div className="calendar__week-row" key={weekNum}>
						{week.map((day, dayNum) => (
							<div className="calendar__day-cell" key={dayNum}>
								<div className="day-cell__day">
									{day.date.format("DD")}
									<p>{day.icon}</p>
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default RulesCalendar;
