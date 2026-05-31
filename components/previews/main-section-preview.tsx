"use client";

import { ComponentPreview } from "../component-preview";
import { SectionHeader } from "../section-header";
import { PropsTable } from "../props-table";
import { MainSection } from "@/ascendra-ui/components/main-section/main-section";
import { MainSectionHeader } from "@/ascendra-ui/components/main-section/main-section-header";
import { MainSectionFooter } from "@/ascendra-ui/components/main-section/main-section-footer";
import { MainSectionPanel } from "@/ascendra-ui/components/main-section/main-section-panel";
import { MainSectionPanelItem } from "@/ascendra-ui/components/main-section/main-section-panel-item";
import { Button } from "@/ascendra-ui/components/ui/button";
import { registry } from "@/lib/registry";

const meta = registry["main-section"];

export function MainSectionDocContent() {
  return (
    <div className="space-y-10">
      <ComponentPreview
        align="start"
        code={`import { MainSection, MainSectionHeader, MainSectionFooter, MainSectionPanel, MainSectionPanelItem } from "@/ascendra-ui/components/layout/main-section";

<MainSection>
  <MainSectionHeader>
    <h3 className="text-sm font-medium text-foreground">Profile</h3>
  </MainSectionHeader>
</MainSection>`}
      >
        <div className="w-full">
          <MainSection>
            <MainSectionHeader>
              <h3 className="text-sm font-medium text-foreground">Profile</h3>
            </MainSectionHeader>
          </MainSection>
        </div>
      </ComponentPreview>

      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            With Panel and Footer
          </h3>
          <p className="text-xs text-muted-foreground">
            Full composition: header, collapsible panel with items, and a footer
            action.
          </p>
          <ComponentPreview
            align="start"
            code={`<MainSection>
  <MainSectionHeader>
    <h3 className="text-sm font-medium text-foreground">School Information</h3>
    <p className="text-xs text-muted-foreground mt-0.5">Your school details visible to parents.</p>
  </MainSectionHeader>
  <MainSectionPanel>
    <MainSectionPanelItem>
      <span className="text-sm text-foreground">School Name</span>
      <span className="text-sm text-muted-foreground">Beacon Academy</span>
    </MainSectionPanelItem>
    <MainSectionPanelItem>
      <span className="text-sm text-foreground">Contact Email</span>
      <span className="text-sm text-muted-foreground">admin@beacon.edu.pk</span>
    </MainSectionPanelItem>
  </MainSectionPanel>
  <MainSectionFooter>
    <Button size="sm" variant="secondary">Edit</Button>
  </MainSectionFooter>
</MainSection>`}
          >
            <div className="w-full">
              <MainSection>
                <MainSectionHeader>
                  <h3 className="text-sm font-medium text-foreground">
                    School Information
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Your school details visible to parents.
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <span className="text-sm text-foreground">School Name</span>
                    <span className="text-sm text-muted-foreground">
                      Beacon Academy
                    </span>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <span className="text-sm text-foreground">
                      Contact Email
                    </span>
                    <span className="text-sm text-muted-foreground">
                      admin@beacon.edu.pk
                    </span>
                  </MainSectionPanelItem>
                </MainSectionPanel>
                <MainSectionFooter>
                  <Button size="sm" variant="secondary">
                    Edit
                  </Button>
                </MainSectionFooter>
              </MainSection>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            Danger Variant
          </h3>
          <p className="text-xs text-muted-foreground">
            Use{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              danger
            </code>{" "}
            for destructive settings like account deletion.
          </p>
          <ComponentPreview
            align="start"
            code={`<MainSection danger>
  <MainSectionHeader>
    <h3 className="text-sm font-medium text-foreground">Danger Zone</h3>
    <p className="text-xs text-muted-foreground mt-0.5">Irreversible actions for your account.</p>
  </MainSectionHeader>
  <MainSectionFooter>
    <Button size="sm" variant="destructive">Delete Account</Button>
  </MainSectionFooter>
</MainSection>`}
          >
            <div className="w-full">
              <MainSection danger>
                <MainSectionHeader>
                  <h3 className="text-sm font-medium text-foreground">
                    Danger Zone
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Irreversible actions for your account.
                  </p>
                </MainSectionHeader>
                <MainSectionFooter>
                  <Button size="sm" variant="destructive">
                    Delete Account
                  </Button>
                </MainSectionFooter>
              </MainSection>
            </div>
          </ComponentPreview>
        </div>
      </div>

      <div className="space-y-4">
        <SectionHeader>Props</SectionHeader>
        <PropsTable props={meta.props ?? []} />
      </div>
    </div>
  );
}
