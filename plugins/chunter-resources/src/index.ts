//
// Copyright © 2020 Anticrm Platform Contributors.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { Resources } from '@anticrm/platform'
import TxBacklinkCreate from './components/activity/TxBacklinkCreate.svelte'
import TxBacklinkReference from './components/activity/TxBacklinkReference.svelte'
import TxCommentCreate from './components/activity/TxCommentCreate.svelte'
import ChannelPresenter from './components/ChannelPresenter.svelte'
import ChannelView from './components/ChannelView.svelte'
import CommentInput from './components/CommentInput.svelte'
import CommentPresenter from './components/CommentPresenter.svelte'
import CommentsPresenter from './components/CommentsPresenter.svelte'
import CreateChannel from './components/CreateChannel.svelte'
import ThreadView from './components/ThreadView.svelte'

export { CommentsPresenter }

export default async (): Promise<Resources> => ({
  component: {
    CommentInput,
    CreateChannel,
    ChannelView,
    CommentPresenter,
    CommentsPresenter,
    ChannelPresenter,
    ThreadView
  },
  activity: {
    TxCommentCreate,
    TxBacklinkCreate,
    TxBacklinkReference
  }
})
