import { useState } from "react";

export function Welcome() {
	const [message, setMessage] = useState("");
	const [reply, setReply] = useState(
		"🌼 Hi! I'm Marigold AI. Ask me anything about Mexico, moving, housing, jobs, paperwork, or communities."
	);
	const [loading, setLoading] = useState(false);

	async function askAI(event: React.FormEvent) {
		event.preventDefault();

		if (!message.trim() || loading) return;

		const question = message.trim();

		setLoading(true);
		setReply("🌼 Thinking...");

		try {
			const response = await fetch("/api/chat", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					message: question,
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || "AI request failed");
			}

			setReply(data.reply || "I didn't receive an answer.");
			setMessage("");
		} catch (error) {
			console.error(error);

			setReply(
				"🌼 Sorry, I couldn't connect to Marigold AI right now."
			);
		} finally {
			setLoading(false);
		}
	}

	return (
		<main className="min-h-screen bg-[#fffaf0] text-[#3d3428]">

			{/* HEADER */}
			<header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#f0dfbd] bg-white/95 px-5 py-4 shadow-sm">

				<div className="flex items-center gap-3">
					<div className="text-4xl">🌼</div>

					<div>
						<h1 className="text-xl font-bold text-[#b87400]">
							The Marigold Project
						</h1>

						<p className="text-sm">
							Your community in Mexico 🇲🇽
						</p>
					</div>
				</div>

				<button
					className="rounded-full bg-[#e6a21a] px-4 py-2 font-bold text-white"
					onClick={() => alert("Spanish translation coming next!")}
				>
					🇪🇸 Español
				</button>

			</header>


			{/* NAVIGATION */}
			<nav className="flex flex-wrap justify-center gap-2 bg-white px-4 py-3">

				<a
					href="#home"
					className="rounded-full px-4 py-2 font-bold text-[#9c6200] hover:bg-[#fff1cc]"
				>
					🏠 Home
				</a>

				<a
					href="#help"
					className="rounded-full px-4 py-2 font-bold text-[#9c6200] hover:bg-[#fff1cc]"
				>
					🔎 Find Help
				</a>

				<a
					href="#ai"
					className="rounded-full px-4 py-2 font-bold text-[#9c6200] hover:bg-[#fff1cc]"
				>
					🌼 AI Assistant
				</a>

				<a
					href="#mexico"
					className="rounded-full px-4 py-2 font-bold text-[#9c6200] hover:bg-[#fff1cc]"
				>
					🇲🇽 Mexico
				</a>

			</nav>


			{/* HERO */}
			<section
				id="home"
				className="bg-gradient-to-br from-[#fff0c8] to-[#fffaf0] px-5 py-24 text-center"
			>

				<div className="mx-auto max-w-4xl">

					<h2 className="text-5xl font-bold text-[#b87400] md:text-7xl">
						Welcome Home 🌼
					</h2>

					<h3 className="mt-5 text-xl font-bold md:text-2xl">
						Starting a new life in Mexico is a big journey.
					</h3>

					<p className="mx-auto mt-5 max-w-2xl text-lg leading-8">
						Find housing, jobs, schools, paperwork help,
						local communities, and resources from people
						who understand your path.
					</p>

				</div>

			</section>


			{/* HELP */}
			<section id="help" className="px-5 py-16">

				<h2 className="mb-10 text-center text-3xl font-bold text-[#b87400]">
					What do you need today? 🌱
				</h2>

				<div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">

					<Card
						icon="🏡"
						title="Moving to Mexico"
						text="Plan your move step by step."
					/>

					<Card
						icon="🏠"
						title="Housing"
						text="Find homes and neighborhoods."
					/>

					<Card
						icon="💼"
						title="Jobs"
						text="Work and income resources."
					/>

					<Card
						icon="👨‍👩‍👧"
						title="Family & Kids"
						text="Schools and adjusting."
					/>

					<Card
						icon="🤝"
						title="Community"
						text="Meet people nearby."
					/>

					<Card
						icon="🆘"
						title="Support"
						text="Help when you need it."
					/>

				</div>

			</section>


			{/* AI */}
			<section
				id="ai"
				className="bg-[#fff4d8] px-5 py-16"
			>

				<div className="mx-auto max-w-2xl rounded-3xl bg-white p-6 shadow-xl">

					<h2 className="text-center text-3xl font-bold text-[#b87400]">
						🌼 Marigold AI
					</h2>

					<p className="mt-3 text-center">
						Ask questions about Mexico, moving, housing,
						jobs, paperwork, communities, and more.
					</p>


					<div className="mt-6 min-h-32 rounded-2xl border border-[#f0dfbd] bg-[#fffaf0] p-5">

						<p className="whitespace-pre-wrap leading-7">
							{reply}
						</p>

					</div>


					<form
						onSubmit={askAI}
						className="mt-4 flex flex-col gap-3 sm:flex-row"
					>

						<input
							value={message}
							onChange={(event) =>
								setMessage(event.target.value)
							}
							placeholder="Ask Marigold AI anything..."
							disabled={loading}
							className="flex-1 rounded-full border border-gray-300 px-5 py-3 outline-none focus:border-[#e6a21a]"
						/>

						<button
							type="submit"
							disabled={loading}
							className="rounded-full bg-[#e6a21a] px-6 py-3 font-bold text-white disabled:opacity-50"
						>
							{loading ? "Thinking..." : "Send"}
						</button>

					</form>

					<p className="mt-4 text-center text-xs text-gray-500">
						AI answers can sometimes be incorrect. Verify
						important information with official sources.
					</p>

				</div>

			</section>


			{/* MEXICO */}
			<section id="mexico" className="px-5 py-16">

				<h2 className="mb-10 text-center text-3xl font-bold text-[#b87400]">
					Explore Mexico 🇲🇽
				</h2>

				<div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">

					<State name="🌊 Veracruz" />
					<State name="🌺 Oaxaca" />
					<State name="🌵 Jalisco" />
					<State name="🏝️ Yucatán" />
					<State name="🌅 Baja California" />
					<State name="🇲🇽 All States" />

				</div>

			</section>


			{/* FOOTER */}
			<footer className="bg-[#342b20] px-5 py-12 text-center text-white">

				<h2 className="text-2xl font-bold text-[#ffd875]">
					🌼 The Marigold Project
				</h2>

				<p className="mt-2">
					Built by community, for community ❤️
				</p>

			</footer>

		</main>
	);
}


function Card({
	icon,
	title,
	text,
}: {
	icon: string;
	title: string;
	text: string;
}) {
	return (
		<div className="rounded-3xl border border-[#f2e5cd] bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl">

			<div className="text-4xl">{icon}</div>

			<h3 className="mt-4 text-xl font-bold text-[#9c6200]">
				{title}
			</h3>

			<p className="mt-2 leading-6">
				{text}
			</p>

		</div>
	);
}


function State({ name }: { name: string }) {
	return (
		<a
			href="#"
			className="rounded-full bg-white px-5 py-3 font-bold text-[#9c6200] shadow-md hover:bg-[#fff1cc]"
		>
			{name}
		</a>
	);
}
