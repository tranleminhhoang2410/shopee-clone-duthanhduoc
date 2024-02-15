import '../src/index.css'
import React from 'react'
import type { Preview } from '@storybook/react'
import {ErrorBoundary} from 'react-error-boundary'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { withRouter } from 'storybook-addon-react-router-v6'

import { AppProvider } from '../src/contexts/app.context'
import Fallback from '../src/components/Fallback/Fallback.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    },
    mutations: {
      retry: false
    }
  }
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators : [
    withRouter,
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <AppProvider>
            <ErrorBoundary fallback={<Fallback/>}>
              <Story />
            </ErrorBoundary>
        </AppProvider>
      </QueryClientProvider>
    )
  ]
};

export default preview;