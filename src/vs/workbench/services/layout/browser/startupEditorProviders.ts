/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IEditorToOpen } from '../../../browser/layout.js';

/**
 * A provider that can contribute editors to open during startup.
 */
export interface IStartupEditorProvider {

	readonly id: string;
	provideStartupEditor(): Promise<IEditorToOpen | undefined>;
}
