import { createWideHook } from 'widehook'
import { InventoryData } from '../../widgets/InventoryTable'

export const useInventoryData = createWideHook({
	init: [] as InventoryData[],
})
