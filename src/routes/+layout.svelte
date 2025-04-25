<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	let { children } = $props();

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	// Get the current path from the page store using runes
	let currentPath = $derived($page.url.pathname);
</script>

<div class="min-h-screen bg-indigo-200 text-slate-800">
	<header class="bg-indigo-200 p-4">
		<nav class="@container">
			<div class="flex items-center justify-between">
				<!-- Logo or Site Name -->
				<a href="/" class="font-title text-4xl font-bold text-slate-800 transition-colors"
					>Hillside Quadra</a
				>

				<!-- Desktop Navigation -->
				<div class="hidden space-x-6 md:flex">
					<a
						href="/about"
						class="relative py-1 font-bold transition-colors {currentPath === '/about'
							? 'text-indigo-500 hover:text-indigo-500'
							: 'text-slate-800 hover:text-slate-600'}"
					>
						About
						{#if currentPath === '/about'}
							<span
								class="absolute bottom-0 left-0 h-0.5 w-full bg-indigo-500 transition-all duration-300 ease-in-out"
							></span>
						{/if}
					</a>
					<a
						href="/events"
						class="relative py-1 font-bold transition-colors {currentPath === '/events'
							? 'text-indigo-500 hover:text-indigo-500'
							: 'text-slate-800 hover:text-slate-600'}"
					>
						Events
						{#if currentPath === '/events'}
							<span
								class="absolute bottom-0 left-0 h-0.5 w-full bg-indigo-500 transition-all duration-300 ease-in-out"
							></span>
						{/if}
					</a>
					<a
						href="/contact"
						class="relative py-1 font-bold transition-colors{currentPath === '/contact'
							? 'text-indigo-500 hover:text-indigo-500'
							: 'text-slate-800 hover:text-slate-600'}"
					>
						Contact
						{#if currentPath === '/contact'}
							<span
								class="absolute bottom-0 left-0 h-0.5 w-full bg-indigo-500 transition-all duration-300 ease-in-out"
							></span>
						{/if}
					</a>
				</div>

				<!-- Mobile Menu Button -->
				<button class="p-2 md:hidden" onclick={toggleMenu} aria-label="Toggle menu">
					<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{#if isMenuOpen}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="3"
								d="M6 18L18 6M6 6l12 12"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="3"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						{/if}
					</svg>
				</button>
			</div>

			<!-- Mobile Navigation -->
			{#if isMenuOpen}
				<div class="mt-4 flex flex-col space-y-4 md:hidden">
					<a
						href="/about"
						class="relative inline-block py-1 transition-colors hover:text-slate-600 {currentPath ===
						'/about'
							? 'font-bold text-indigo-500'
							: 'text-slate-800'}"
					>
						About
						{#if currentPath === '/about'}
							<span
								class="absolute bottom-0 left-0 h-0.5 w-12 bg-indigo-500 transition-all duration-300 ease-in-out"
							></span>
						{/if}
					</a>
					<a
						href="/events"
						class="relative inline-block py-1 transition-colors hover:text-slate-600 {currentPath ===
						'/events'
							? 'font-bold text-indigo-500'
							: 'text-slate-800'}"
					>
						Events
						{#if currentPath === '/events'}
							<span
								class="absolute bottom-0 left-0 h-0.5 w-full bg-indigo-500 transition-all duration-300 ease-in-out"
							></span>
						{/if}
					</a>
					<a
						href="/contact"
						class="relative inline-block py-1 transition-colors hover:text-slate-600 {currentPath ===
						'/contact'
							? 'font-bold text-indigo-500'
							: 'text-slate-800'}"
					>
						Contact
						{#if currentPath === '/contact'}
							<span
								class="absolute bottom-0 left-0 h-0.5 w-full bg-indigo-500 transition-all duration-300 ease-in-out"
							></span>
						{/if}
					</a>
				</div>
			{/if}
		</nav>
	</header>
	{@render children()}
	<footer></footer>
</div>
