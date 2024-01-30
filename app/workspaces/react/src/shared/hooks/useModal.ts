import { createWideHook } from 'widehook'

export function open() {
	const [, setIsOpen] = useModal()

	setIsOpen(true)
}

export function close() {
	const [, setIsOpen] = useModal()

	setIsOpen(false)
}

export const useModal = createWideHook({
	init: false,
})
