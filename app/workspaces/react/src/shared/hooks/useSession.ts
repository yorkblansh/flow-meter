import { createWideHook } from 'widehook'
import type { sessions as Session } from '@prisma/client'

export const useSession = createWideHook({
	init: undefined as unknown as Session,
})
