'use client';

import { MainContent } from '@/components/custom/layout/main-content';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';
import { PageContent } from '@/components/custom/layout/page-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageWrapper } from '@/components/custom/layout/page-wrapper';
import { Anchor } from '@/components/custom/common-ui/anchor';
import { Switch } from '@/components/custom/ui/switch';
import Image from 'next/image';

export default function Web3Page() {
  return (
    <>
      <PageHeader>
        <PageTitle>Web3</PageTitle>
      </PageHeader>
      <PageMain>
        <PageWrapper>
          <PageContent>
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">Web3 Wallets</span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    Allow users to sign up and sign in using Web3 wallets
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-5">
                      <div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                          <Image
                            src="/images/web3/base.svg"
                            alt=""
                            className="size-6"
                            width={6}
                            height={6}
                          />
                          <span className="inline-block w-full font-medium sm:w-32">
                            Base
                          </span>
                          <span className="text-muted-foreground flex-1 text-xs">
                            Allow users to authenticate using Base Account. See
                            the <Anchor href="#">Base quickstart.</Anchor>
                          </span>
                        </div>
                      </div>
                      <Switch />
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-5">
                      <div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                          <Image
                            src="/images/web3/mask.svg"
                            alt=""
                            className="size-6"
                            width={6}
                            height={6}
                          />
                          <span className="inline-block w-full font-medium sm:w-32">
                            MetaMask
                          </span>
                          <span className="text-muted-foreground flex-1 text-xs">
                            Allow users to authenticate using MetaMask which
                            requires the use of the{' '}
                            <Anchor href="#">
                              MetaMask browser extension.
                            </Anchor>
                          </span>
                        </div>
                      </div>
                      <Switch />
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-5">
                      <div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                          <Image
                            src="/images/web3/coinbase.svg"
                            alt=""
                            className="size-6"
                            width={6}
                            height={6}
                          />
                          <span className="inline-block w-full font-medium sm:w-32">
                            Coinbase Wallet
                          </span>
                          <span className="text-muted-foreground flex-1 text-xs">
                            Allow users to authenticate using Coinbase Wallet
                            which requires the use of the{' '}
                            <Anchor href="#">Coinbase Smart Wallet.</Anchor>
                          </span>
                        </div>
                      </div>
                      <Switch />
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-5">
                      <div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                          <Image
                            src="/images/web3/ok.svg"
                            alt=""
                            className="size-6"
                            width={6}
                            height={6}
                          />
                          <span className="inline-block w-full font-medium sm:w-32">
                            OKX Wallet
                          </span>
                          <span className="text-muted-foreground flex-1 text-xs">
                            Allow users to authenticate using OKX Wallet which
                            requires the use of the{' '}
                            <Anchor href="#">
                              OKX Wallet browser extension.
                            </Anchor>
                          </span>
                        </div>
                      </div>
                      <Switch />
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-5">
                      <div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                          <Image
                            src="/images/web3/solana.svg"
                            alt=""
                            className="size-6"
                            width={6}
                            height={6}
                          />
                          <span className="inline-block w-full font-medium sm:w-32">
                            Solana
                          </span>
                          <span className="text-muted-foreground flex-1 text-xs">
                            Allow users to authenticate using{' '}
                            <Anchor href="#">Solana supported wallets</Anchor>{' '}
                            and a compatible browser extension.
                          </span>
                        </div>
                      </div>
                      <Switch />
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
            </MainContent>
          </PageContent>
        </PageWrapper>
      </PageMain>
    </>
  );
}
